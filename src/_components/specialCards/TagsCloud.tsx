import React from "react";
import CardLayout from "../cards/CardLayout";
import Tags from "../Tags";

export type TagsCloudCardProps = {
  id: string;
  title: string;
  description?: string;
  tags: string[];
};

function TagsCloudCard({ id, title, description, tags }: TagsCloudCardProps) {
  return (
    <CardLayout id={id} title={title} description={description}>
      <Tags tags={tags} justifyContent="start" />
    </CardLayout>
  );
}

export default TagsCloudCard;
