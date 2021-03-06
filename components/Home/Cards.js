import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Card, Image, Grid } from "semantic-ui-react";

const Cards = ({ val }) => {
  const url = val.url.split("/");
  return (
    <Grid.Column style={{ marginBottom: 10 }}>
      <Card>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        <Card.Content>
          <Card.Header>
            <Link
              href={`/${url[4]}/${url[5]}`}
              as={`/${url[4]}/${url[5]}`}
              prefetch
            >
              <a>{val.name}</a>
            </Link>
          </Card.Header>
          <Card.Meta>
            <span className="date">{val.birth_year}</span>
          </Card.Meta>
          <Card.Description>{`${val.name} have a ${val.eye_color} eye, ${val.hair_color} hair, ${val.skin_color} skin, ${val.height} height and ${val.gender} gender `}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link
            href={`/${url[4]}/${url[5]}`}
            as={`/${url[4]}/${url[5]}`}
            prefetch
          >
            <a>See Detail</a>
          </Link>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

Cards.propTypes = {
  val: PropTypes.object.isRequired
};

export default Cards;
