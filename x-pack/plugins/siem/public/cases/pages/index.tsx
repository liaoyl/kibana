/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { SiemPageName } from '../../app/types';
import { CaseDetailsPage } from './case_details';
import { CasesPage } from './case';
import { CreateCasePage } from './create_case';
import { ConfigureCasesPage } from './configure_cases';

const casesPagePath = `/:pageName(${SiemPageName.case})`;
const caseDetailsPagePath = `${casesPagePath}/:detailName`;
const caseDetailsPagePathWithCommentId = `${casesPagePath}/:detailName/:commentId`;
const createCasePagePath = `${casesPagePath}/create`;
const configureCasesPagePath = `${casesPagePath}/configure`;

const CaseContainerComponent: React.FC = () => (
  <Switch>
    <Route strict exact path={casesPagePath}>
      <CasesPage />
    </Route>
    <Route strict exact path={createCasePagePath}>
      <CreateCasePage />
    </Route>
    <Route strict exact path={configureCasesPagePath}>
      <ConfigureCasesPage />
    </Route>
    <Route strict path={caseDetailsPagePathWithCommentId}>
      <CaseDetailsPage />
    </Route>
    <Route strict path={caseDetailsPagePath}>
      <CaseDetailsPage />
    </Route>
  </Switch>
);

export const Case = React.memo(CaseContainerComponent);
