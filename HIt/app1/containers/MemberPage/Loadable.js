/**
 *
 * Asynchronously loads the component for MemberPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
