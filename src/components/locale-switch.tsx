"use client";

import { setCookie } from "@/actions/set-cookie";

export function LocaleSwitch() {
  return (
    <div>
      <button onClick={() => setCookie({ name: "locale", value: "fr" })}>
        Français
      </button>
      <button onClick={() => setCookie({ name: "locale", value: "en" })}>
        English
      </button>
    </div>
  );
}
