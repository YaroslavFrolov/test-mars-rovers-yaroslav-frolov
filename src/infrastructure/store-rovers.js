import { observable, runInAction } from 'mobx';
import { apiGetRoverInfo } from './api';
import { ROVERS } from './constants';


export class StoreRovers {
  @observable isLoading = true;
  @observable isError = false;
  @observable rovers = [];

  constructor () {
    this.getRovers();
  }

  getRovers = () => {
    let allRoverPromises = Object.values(ROVERS).map(rover => {
      return apiGetRoverInfo(rover.route);
    });

    Promise
      .all(allRoverPromises)
      .then(data => {
        runInAction(() => {
          this.rovers = data.map(item => item.photo_manifest);
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
}
