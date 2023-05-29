import React from 'react';
import { useAsync } from "react-use";
import { useApi } from '@backstage/core-plugin-api';
import { Progress } from '@backstage/core-components';
import Alert from "@material-ui/lab/Alert";
import { AlertsTable } from './AlertsTable';
import { opsgenieApiRef } from '../../api';
import moment from 'moment';



export const AlertsList = () => {
  const opsgenieApi = useApi(opsgenieApiRef);

  const fromLastFourWeeks = moment().subtract(3, 'weeks').startOf('week');
  const to = moment();
  

  const { value, loading, error } = useAsync(async () => await opsgenieApi.getAlerts({query: `createdAt < ${to.valueOf()} AND createdAt > ${fromLastFourWeeks.valueOf()}`}));

  if (loading) {
    return <Progress />;
  } else if (error) {
    return (
      <Alert data-testid="error-message" severity="error">
        {error.message}
      </Alert>
    );
  }

  return <AlertsTable alerts={value!} />;
};
