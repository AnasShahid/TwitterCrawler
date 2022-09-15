import { ITwitterDataResponse, user } from "../interfaces";

const filterTweetData = (tweetData: ITwitterDataResponse) => {
  const {
    data,
    includes: { users },
    meta,
  } = tweetData;

  data.forEach(({ author_id }: { author_id: string }, index: number) => {
    users.forEach((user: user) => {
      if (author_id === user.id) {
        data[index] = {
          ...data[index],
          author: {
            ...user,
          },
        };
      }
    });
  });

  return {
    tweetData: data,
    meta,
  };
};
export { filterTweetData };
