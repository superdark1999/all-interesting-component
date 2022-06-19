import React from "react";
import styled from "styled-components";

export default function MyCard() {
  return (
    <CardStyled>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ab
        eius maxime optio fugit. Dolorum natus eveniet aliquid earum labore non.
        Sunt veritatis vero, iure asperiores, at blanditiis facilis, accusamus
        nesciunt magnam iste quasi deserunt fuga corporis! Natus molestias
        expedita illo animi nisi nam, quod aut minima a ratione rerum.
      </div>
      <div className="footer">
        <img
          src="https://randomuser.me/api/portraits/thumb/women/10.jpg"
          alt=""
        />
        <div className="name">Long dep trai</div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap");

  font-family: "Inter", sans-serif;
  max-width: 500px;
  margin-top: 100px;
  border-color: black;
  box-shadow: 0px 0px 20px 20px #efeeee;
  border-radius: 30px;
  transition: transform 1s ease-out;
  transform: rotate(-5deg);
  &:hover {
    transform: rotate(5deg);
    cursor: pointer;
  }
  .content {
    padding: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  .footer {
    display: flex;
    background-image: linear-gradient(#74d690, #5cbfbb);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 10px 0px 10px 20px;
    img {
      margin-right: 10px;
      border-radius: 50%;
      border: 3px solid white;
    }

    .name {
      display: grid;
      place-items: center;
      color: white;
    }
  }
`;
