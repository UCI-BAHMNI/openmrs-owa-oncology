/**
 *
 * OrderPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import Page from 'components/Page';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOrderPage from './selectors';
import EditMedicationDialog from './components/EditMedicationDialog';
import CyclesFormControl from './components/CyclesFormControl';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class OrderPage extends React.Component {
  state = { template: 0, openEditDialog: false };

  templates = [
    'CHOP Protocol for Non Hodking Lymphome',
    'CHOP Protocol for Non Hodking Lymphome 2',
    'CHOP Protocol for Non Hodking Lymphome 3',
    'CHOP Protocol for Non Hodking Lymphome 4',
  ];

  handleSelect = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Page>
        <Helmet>
          <title>Order Page</title>
          <meta name="description" content="Description of OrderPage" />
        </Helmet>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display1" gutterBottom>
              <FormattedMessage {...messages.selectRegimen} />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <Select
                value={this.state.template}
                onChange={this.handleSelect}
                inputProps={{
                  name: 'template',
                  id: 'template',
                }}
              >
                {this.templates.map((name, i) => (
                  <MenuItem value={i} key={`template-${name}`}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="display1" gutterBottom>
              <FormattedMessage {...messages.cycles} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CyclesFormControl />
          </Grid>
          <EditMedicationDialog
            open={this.state.openEditDialog}
            onSave={() => this.setState({ openEditDialog: false })}
            onClose={() => this.setState({ openEditDialog: false })}
          />
          <Button onClick={() => this.setState({ openEditDialog: true })}>
            Edit dialog
          </Button>
        </Grid>
      </Page>
    );
  }
}

OrderPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orderpage: makeSelectOrderPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'orderPage', reducer });
const withSaga = injectSaga({ key: 'orderPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OrderPage);
