import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ListData } from "../../interfaces/listData.interface";
export default function OutPut(props: { Data: ListData[] }) {
  return (
    <div className="listCards">
      {props.Data?.map((element, index) => {
        return (
          <Card className="card" key={index} sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="200" image={element.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {element.text.responses[0].fullTextAnnotation.text}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
