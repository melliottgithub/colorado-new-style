import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, CardMedia } from "@material-ui/core";

function Example() {
  var items = [
    {
      id: '1',
      description: "Probably the most random thing you have ever seen!",
      img:
        "https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/17546770_10154704551723821_2762824996112511083_o.jpg?_nc_cat=104&_nc_sid=b386c4&_nc_oc=AQlh2rsrQ3rMz9LOEK13sr_NBSife-rosf_IhDpQVpNdIXMUdcNQj-Ls9HVyxjCTuHQ09FyDMZlGLqoEiKKtrnZD&_nc_ht=scontent.fapa1-2.fna&oh=80d7796c8bf3d1e0932a770255c6317e&oe=5F0A5ECE",
    },
    {
      id: '2',
      description: "Hello World!",
      img:
        "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/46488026_1766787893429896_1945745619607879680_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_oc=AQk2N9IU-RdhDPv0OL1_RKjl5OsbDJR9QX8_hYejbKu3Z0lCQUft2hKIO6NUPNsXCZKHggcErJpAHRA_jIVw0zE5&_nc_ht=scontent.fapa1-2.fna&oh=b7ee49865a19a7976fe6f0cdd5badd85&oe=5F0956C2",
    },
    {
      id: '3',
      description: "Hello World!",
      img:
        "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/76616518_3107424369273093_8555967503837167616_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_oc=AQmR6HIiAvv5o3k8nx3XL6E8TedtmLCXHtgWIAB5IhMSA9Jx15DNFuWn9CRuOQfzdq3rGzFfVp_FkMFfGCUIasgM&_nc_ht=scontent.fapa1-2.fna&oh=734283dcfeffedc8d2a378583ee9cf42&oe=5F09B9EA",
    },
    {
      id: '4',
      description: "Hello World!",
      img:
        "https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/18623578_1933490690219209_7847028851134987499_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_oc=AQms83kPH9G6LZHANkTnisMboTUOx0rJ4FqBhGcIWs3GfpVNSmwEfL_ugLn7ZlHjiHIiFom1BdU1Qeyaf1kMEDhd&_nc_ht=scontent.fapa1-2.fna&oh=4e86e22a3749084b070a2f52d53efa37&oe=5F072B11",
    },
    {
      id: '5',
      description: "Hello World!",
      img:
        "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/50436430_2278110998887974_5010082645023916032_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQmJmsGYkqvEOY5T9w9hDrAPQxWQg3RA-OQpp9ISqD3p6AAYQ-74rwaD6zcDz8UDvva6Rpbc1M57eH4DHqfLR606&_nc_ht=scontent.fapa1-1.fna&oh=35a7b07749b8bc3faae43285db64a07a&oe=5F08C278",
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      timeout={500}
      indicators={false}
      animation="fade"
      navButtonsAlwaysVisible
    >
      {items.map((item,id) => (
        <Item key={id} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <CardMedia
        style={{ height: "60vh", backgroundPosition: "top" }}
        image={props.item.img}
        alt={props.item.description}
      ></CardMedia>
    </Paper>
  );
}
export default Example;
