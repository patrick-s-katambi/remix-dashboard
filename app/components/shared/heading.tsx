import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";
import React from "react";

interface IHeading {
    title: string;
}

const Heading: React.FunctionComponent<
    IHeading & TitleProps & React.RefAttributes<HTMLElement>
> = ({ title, ...props }) => <Typography.Title {...props}>{title}</Typography.Title>;

export default Heading;
