import moment from "moment";

export const getFormatedDate = (date: string) => {
  let tarnsformatedDate = "";
  const duration = moment.duration(moment(new Date()).diff(moment(date)));
  const hours = +duration.asHours().toFixed(0);
  if (hours <= 0) {
    tarnsformatedDate = String((hours % 60).toFixed(0));
  } else if (hours > 24) {
    tarnsformatedDate = moment(date).format("MMMM DD");
  } else tarnsformatedDate = String(hours);
  return tarnsformatedDate;
};

export const hashTag = (text: string) => {
  return {
    __html: text.replaceAll(
      /(#\S+|@\S+)/g,
      "<span  class='hash-mention'>$1</span>"
    ),
  };
};
