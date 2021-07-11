import React from "react";
interface Props {
  email: string;
  gender: "male" | "female";
  title: string;
  firstName: string;
  lastName: string;
}
const UserRow: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-around m-5 text-gray-700 font-semibold text-strt">
      <h2>{props.title + " " + props.firstName + " " + props.lastName}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};
UserRow.defaultProps = {};

export default UserRow;
