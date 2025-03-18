import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

const BlogCard = (props) => {
  const calculateCategoryColor = () => {
    switch (props.data.category) {
      case "Tech":
        return "primary";
      case "Sports":
        return "error";
      case "News":
        return "primary";
      default:
        return "secondary";
    }
  };

  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={props.data.image}
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.data.description}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.data.createdOn}
        </Typography>

        <p>
          <Chip label={props.data.category} color={calculateCategoryColor()} />
        </p>

        <Typography variant="body2" fontWeight="bold" sx={{ color: "text.primary" }}>
          Created By: {props.data.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
