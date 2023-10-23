import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="">
      <div>
        🛠️ in the works by{" "}
        <Link href={"https://twitter.com/jooshmayer"}>@joshmayerr</Link>{" "}
      </div>
      <div>
        {" "}
        <Link href={"https://github.com/bix_web"}>github</Link> | i would love
        your feedback/contributions!!
      </div>
    </div>
  );
}
