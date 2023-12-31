import PropTypes from 'prop-types';
import React from 'react';
import withLocalize, {withLocalizePropTypes} from '@components/withLocalize';
import WorkspacePageWithSections from '@pages/workspace/WorkspacePageWithSections';
import CONST from '@src/CONST';
import WorkspaceInvoicesNoVBAView from './WorkspaceInvoicesNoVBAView';
import WorkspaceInvoicesVBAView from './WorkspaceInvoicesVBAView';

const propTypes = {
    /** The route object passed to this page from the navigator */
    route: PropTypes.shape({
        /** Each parameter passed via the URL */
        params: PropTypes.shape({
            /** The policyID that is being configured */
            policyID: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,

    ...withLocalizePropTypes,
};

function WorkspaceInvoicesPage(props) {
    return (
        <WorkspacePageWithSections
            shouldUseScrollView
            headerText={props.translate('workspace.common.invoices')}
            route={props.route}
            guidesCallTaskID={CONST.GUIDES_CALL_TASK_IDS.WORKSPACE_INVOICES}
        >
            {(hasVBA, policyID) => (
                <>
                    {!hasVBA && <WorkspaceInvoicesNoVBAView policyID={policyID} />}
                    {hasVBA && <WorkspaceInvoicesVBAView policyID={policyID} />}
                </>
            )}
        </WorkspacePageWithSections>
    );
}

WorkspaceInvoicesPage.propTypes = propTypes;
WorkspaceInvoicesPage.displayName = 'WorkspaceInvoicesPage';

export default withLocalize(WorkspaceInvoicesPage);
