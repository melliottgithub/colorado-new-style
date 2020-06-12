import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, CardMedia } from "@material-ui/core";

function Example() {
  var items = [
    {
      name: "name",
      description: "Probably the most random thing you have ever seen!",
      img:
        "https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/17546770_10154704551723821_2762824996112511083_o.jpg?_nc_cat=104&_nc_sid=b386c4&_nc_oc=AQlh2rsrQ3rMz9LOEK13sr_NBSife-rosf_IhDpQVpNdIXMUdcNQj-Ls9HVyxjCTuHQ09FyDMZlGLqoEiKKtrnZD&_nc_ht=scontent.fapa1-2.fna&oh=80d7796c8bf3d1e0932a770255c6317e&oe=5F0A5ECE",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img:
        "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/46488026_1766787893429896_1945745619607879680_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_oc=AQk2N9IU-RdhDPv0OL1_RKjl5OsbDJR9QX8_hYejbKu3Z0lCQUft2hKIO6NUPNsXCZKHggcErJpAHRA_jIVw0zE5&_nc_ht=scontent.fapa1-2.fna&oh=b7ee49865a19a7976fe6f0cdd5badd85&oe=5F0956C2",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img:
        "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/76616518_3107424369273093_8555967503837167616_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_oc=AQmR6HIiAvv5o3k8nx3XL6E8TedtmLCXHtgWIAB5IhMSA9Jx15DNFuWn9CRuOQfzdq3rGzFfVp_FkMFfGCUIasgM&_nc_ht=scontent.fapa1-2.fna&oh=734283dcfeffedc8d2a378583ee9cf42&oe=5F09B9EA",
    },
  ];

  return (
    <Carousel interval={3000} animation="fade" navButtonsAlwaysVisible>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <CardMedia
        style={{ height: "60vh", backgroundPosition: 'top' }}
        image={props.item.img}
        alt="pic"
      ></CardMedia>
    </Paper>
  );
}
export default Example;
