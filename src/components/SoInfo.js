import React from "react";



function SoInfo(info, indexNumber) {
    const { email, full_name, phone, service_needed, so_id, user_id } =
    info[indexNumber];
  return (
    <div>
      <div className="theInfo">
        <p>Full Name: {full_name}</p>
        <p>Service Needed: {service_needed}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}

export default SoInfo;
