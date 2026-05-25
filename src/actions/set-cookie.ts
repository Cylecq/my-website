"use server";

import { cookies } from "next/headers";

type Cookie = {
  name: string;
  value: string;
};

export async function setCookie(cookie: Cookie) {
  const { name, value } = cookie;
  const cookieStore = await cookies();

  cookieStore.set(name, value);
}
