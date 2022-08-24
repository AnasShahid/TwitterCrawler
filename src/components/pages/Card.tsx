export interface IData {
  [owner: string]: string;
  imageUrl: any;
}

export const Card: React.FC<IData> = ({ owner, imageUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img style={{ width: "40%" }} src={imageUrl} alt="alt" />
      <div>
        <div>{owner}</div>
      </div>
    </div>
  );
};
