import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OptionCard } from "./OptionCard.js";
import bookPoolPhoto from "../Assets/bookPool.jpg";

const LandingPageOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  & .main {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
    align-items: center;
    margin-left: 7em;
    margin-right: 7em;
  }
  & .link {
    text-decoration: none;
  }
`;

const LandingPageOptions = ({ loggedin }) => {
  return (
    <LandingPageOptionsStyled>
      {loggedin === "admin" ? (
        <div className="main">
          <Link className="link" to="/adminlanding/users">
            <OptionCard name={"Users"} />
          </Link>
          <Link className="link" to="/adminlanding/bookpool">
            <OptionCard name={"Book Pool"} photoURL={bookPoolPhoto} />
          </Link>
          <Link className="link" to="/adminlanding/transactions">
            <OptionCard name={"Transactions"} />
          </Link>
          <Link className="link" to="/adminlanding/requests">
            <OptionCard name={"Requests"} />
          </Link>
        </div>
      ) : (
        <div className="main">
          <Link className="link" to="/userslanding/bookpool">
            <OptionCard name={"Book Pool"} photoURL={bookPoolPhoto} />
          </Link>
          <Link className="link" to="/userslanding/profile">
            <OptionCard name={"My Profile"} />
          </Link>
          <Link className="link" to="/userslanding/lendings">
            <OptionCard name={"Current Lendings"} />
          </Link>
          <Link className="link" to="/userslanding/lendabook">
            <OptionCard name={"Lend a Book"} />
          </Link>
          <Link className="link" to="/userslanding/requestabook">
            <OptionCard name={"Request a Book"} />
          </Link>
          <Link className="link" to="/userslanding/extension">
            <OptionCard name={"Apply for Extension"} />
          </Link>
          <Link className="link" to="/userslanding/requestsrecieved">
            <OptionCard name={"Requests Recieved"} />
          </Link>
          <Link className="link" to="/userslanding/returnbook">
            <OptionCard name={"Return a Book"} />
          </Link>
          <Link className="link" to="/userslanding/paydues">
            <OptionCard name={"Pay Dues"} />
          </Link>
        </div>
      )}
    </LandingPageOptionsStyled>
  );
};

export default LandingPageOptions;
