import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCards = ({ news }) => {
  const { _id, title, author, details, image_url, total_view, rating } = news;
  const { name, img, published_date } = author;
  // console.log(name);

  return (
    <div className="g-3">
      <Card className="mb-3">
        <Card.Header className="d-flex justify-content-between align-items-center m-1">
          <div className="d-flex">
            <div>
              {" "}
              <Image
                className="me-2"
                src={img}
                roundedCircle
                style={{ width: "60px", border: "2px solid black" }}
              ></Image>
            </div>
            <div>
              <h5 className="m-0 mt-2">{name}</h5>
              <p className="">{published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2" />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 200 ? (
              <span>
                {details.slice(0, 200) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>{" "}
              </span>
            ) : (
              <span>{details}</span>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div className="d-flex ">
            <FaStar className="mt-1 me-1 text-warning" />
            <p className="m-0">{rating.number}</p>
          </div>
          <div className="d-flex">
            <FaEye className="mt-1 me-1" />
            <p className="m-0">{total_view}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCards;
