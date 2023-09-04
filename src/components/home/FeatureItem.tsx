import { FC } from "react";

export const FeatureItem: FC<{ title: string; description: string }> = ({
  title,
  description
}) => {
  return (
    <div className="bg-custom_gray p-8 rounded-lg flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>
        {description}
      </p>
    </div>
  );
};
