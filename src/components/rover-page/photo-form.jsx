import React from 'react';
import { Form, Field } from 'react-final-form'
import { useStore } from 'infrastructure/context-stores';
import { CAMERAS } from 'infrastructure/constants';
import { composeValidators, onlyDigits, minFirstSol, maxLastSol, required } from 'utils/validators';
import { Button } from 'shared/button';
import styles from './rover-form.module.scss';


const Error = ({ name }) =>
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={props => {
      const { meta: { touched, error, pristine } } = props;

      return touched && error && !pristine ? <p className={styles.error}>{error}</p> : null;
    }}
  />;



export const PhotoForm = props => {
  const { roverName, maxSol } = props;
  const { storeRoverPage } = useStore();
  const { getPhotos } = storeRoverPage;

  const onSubmit = data => {
    return getPhotos(roverName, data)
  };

  return (
    <div className={styles.wrapper}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => {
          return <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>
                <span>Sol</span>
                <Field
                  name='sol'
                  component='input'
                  type='text'
                  disabled={submitting}
                  validate={composeValidators(required('add sol please'), onlyDigits, minFirstSol, maxLastSol(maxSol))}
                />
              </label>
              <Error name='sol' />
            </div>
            <div className={styles.field}>
              <label>
                <span>Camera</span>
                <Field
                  name='camera'
                  component='select'
                  placeholder='camera'
                  disabled={submitting}
                  validate={required('select type of camera please')}
                >
                  <option disabled />
                  {Object.values(CAMERAS).map(camera => {
                    return (
                      <option
                        value={camera.nameShort.toLowerCase()}
                        key={camera.nameShort}
                      >
                        ({camera.nameShort}) {camera.nameFull}
                      </option>
                    )
                  })}
                </Field>
              </label>
              <Error name='camera' />
            </div>
            <Button type='submit' disabled={submitting}>
              {submitting ? 'wait please...' : 'Show photos'}
            </Button>
          </form>
        }}
      />
    </div>
  );
};
