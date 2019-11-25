import * as actions from '../../../src/features/app/app-actions'
import * as types from '../../../src/features/app/app-types';

describe('App Actions', () => {
  [
    // START_INIT_APP ACTION
    { 
      action: actions.startInitApp,
      expectedAction: {
        type: types.Actions.START_INIT_APP
      }
    },
    // FINISH_INIT_APP ACTION
    { 
      action: actions.finishInitApp,
      expectedAction: {
        type: types.Actions.FINISH_INIT_APP
      }
    },
  ].forEach(({ action, expectedAction}) => {
    it('should create the expected action object', () => {
      expect(action()).toEqual(expectedAction)
    });
  })
  
})