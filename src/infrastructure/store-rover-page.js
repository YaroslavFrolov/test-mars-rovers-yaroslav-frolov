import { observable, runInAction, action } from 'mobx';
import { apiGetPhotos } from './api';


export class StoreRoverPage {
  @observable isLoading = false;
  @observable isError = false;
  @observable photos = [];
  @observable selectedIdx = 0;

  @action
  getPhotos = (...args) => {
    this.isLoading = true;

    return apiGetPhotos(...args)
      .then(data => {
        runInAction(() => {
          this.photos = data.photos;
        });
      })
      .catch(err => {
        runInAction(() => {
          this.isError = true;
        });
      })
      .finally(() => {
        runInAction(() => {
          this.isLoading = false;
        });
      });
  }

  @action
  updateSelectedIndex = idx => {
    this.selectedIdx = idx;
  }

  @action
  clearStore = () => {
    this.isLoading = false;
    this.isError = false;
    this.photos = [];
    this.selectedIdx = 0;
  }
}
