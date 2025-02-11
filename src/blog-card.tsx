import { ArrowIcon } from "./arrow-icon";

import SpaceJoyImg from "./assets/spacejoy.webp";

export const BlogCard = () => {
  return (
    <article className="mt-[120px] w-[340px] self-start overflow-hidden rounded-lg bg-white [box-shadow:_0px_1px_3px_0px_rgba(0,_0,_0,_10%),_0px_1px_2px_0px_rgba(0,_0,_0,_6%)]">
      <figure className="h-[288px]">
        <img
          src={SpaceJoyImg}
          className="h-full w-full object-cover"
          alt="Space Joy Image From Unsplash"
        />
      </figure>

      <div className="flex flex-col gap-3 px-4 py-6 font-body">
        <div className="flex flex-col gap-2">
          <span className="flex h-[24px] w-[67px] items-start justify-center rounded-full border-[1px] border-green-200 bg-green-50 text-sm text-green-700">
            Interior
          </span>

          <h4 className="text-lg font-semibold text-neutral-900">
            Top 5 Living Room Inspirations
          </h4>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-medium text-neutral-600">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>

          <a
            className="flex items-center gap-[6px] font-medium text-indigo-700"
            href="#"
          >
            <span className="inline-block px-[2px]">Read more</span>
            <ArrowIcon aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};
