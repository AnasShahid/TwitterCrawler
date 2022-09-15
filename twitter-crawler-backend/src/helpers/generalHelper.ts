import { ITwitterDataResponse, user } from "../interfaces";

const filterTweetData = (tweetData: ITwitterDataResponse) => {
  const {
    data,
    includes: { users },
    meta,
  } = tweetData;
  data.forEach(({ author_id }: { author_id: string }, index: number) => {
    const userArrayIndex = users.findIndex(
      (user: user) => author_id === user.id
    );
    data[index] = {
      ...data[index],
      author: {
        ...users[userArrayIndex],
      },
    };
  });

  return {
    tweetData: data,
    meta,
  };
};
export { filterTweetData };
