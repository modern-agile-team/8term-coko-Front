import { useMutation } from '@tanstack/react-query';
import usersApis from '../apis/usersApis';
const progressQuery = {
  put: () => {
    return useMutation({ mutationFn: usersApis.putQuizzesProgress });
  },
};

export default progressQuery;
