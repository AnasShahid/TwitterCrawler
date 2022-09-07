import moment from "moment";

export const getFormattedDate = (date: string) => {
  let formattedDate = "";
  const duration = moment.duration(moment(new Date()).diff(moment(date)));
  const hours = +duration.asHours().toFixed(0);
  if (hours <= 0) {
    formattedDate = String((hours % 60).toFixed(0));
  } else if (hours > 24) {
    formattedDate = moment(date).format("MMMM DD");
  } else formattedDate = String(hours);
  return formattedDate;
};

export const hashTagHighlighter = (text: string) => {
  return {
    __html: text.replaceAll(
      /(#\S+|@\S+)/g,
      "<span  class='hash-mention'>$1</span>"
    ),
  };
};
