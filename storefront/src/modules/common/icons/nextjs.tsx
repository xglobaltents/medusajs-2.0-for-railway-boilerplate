import React from "react"

import { IconProps } from "types/icon"

const NextJs: React.FC<IconProps> = ({
  size = "25",
  color = "#9CA3AF",
  ...attributes
}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
      <path d="m255.625-.312 2.942.006C272.908-.255 286.902.149 301 3l3.029.586C344.473 11.58 381.642 28.509 414 54l2.984 2.336C424.314 62.204 431.184 68.55 438 75l2.063 1.934c4.637 4.476 8.636 9.44 12.65 14.472a348 348 0 0 0 4.107 4.969C475.501 118.86 489.722 145.317 499 173l.83 2.46c3.24 9.775 5.774 19.659 7.92 29.727l.602 2.803c3.224 15.868 4.025 31.484 3.96 47.635l-.006 2.942c-.051 14.341-.455 28.335-3.306 42.433l-.586 3.029C499.312 350.08 478.47 393.832 446 428a497 497 0 0 0-3.562 4.125c-6.244 7.146-12.967 13.52-20.383 19.438a344 344 0 0 0-6.422 5.25C393.083 475.554 366.683 489.525 339 499l-2.347.83c-9.613 3.385-19.29 5.89-29.278 7.92l-2.958.602c-16.043 3.091-31.736 4.026-48.042 3.96l-2.942-.006c-14.341-.051-28.335-.455-42.433-3.306l-3.029-.586C167.956 500.505 129.686 483.91 98 458l-2.703-2.125C66.47 432.949 44.088 404.512 27 372l-1.136-2.12C13.707 346.944 5.728 320.633 2 295l-.551-3.736c-1.6-11.625-1.808-23.168-1.761-34.889l.006-2.942C-.255 239.092.149 225.098 3 211l.586-3.029C11.583 167.511 28.525 130.381 54 98l2.266-2.914C79.146 66.357 107.586 44.037 140 27l2.12-1.136C165.056 13.707 191.367 5.728 217 2l3.736-.551c11.625-1.6 23.168-1.808 34.889-1.761"></path>
      <path
        fill={color}
        d="M400 128c-5.565 6.783-11.766 12.9-17.972 19.086l-3.638 3.638q-4.915 4.915-9.836 9.823-5.149 5.142-10.294 10.286a51427 51427 0 0 1-19.474 19.453q-11.091 11.076-22.18 22.157Q293.81 235.227 271 258c1.353 3.02 2.86 5.107 5.202 7.435l1.997 2.002 2.188 2.161 2.306 2.303c2.517 2.51 5.041 5.013 7.565 7.517l5.238 5.222q6.893 6.872 13.8 13.734a23143 23143 0 0 1 22.112 22.017q3.873 3.855 7.751 7.706l4.713 4.693 2.2 2.18 1.98 1.975 1.735 1.725C351 340 351 340 351 341c-13.056.679-26.107 1.19-39.177 1.503-6.074.15-12.135.352-18.202.685-44.016 2.354-44.016 2.354-58.614-10.703C228.59 326.268 223.05 319.355 218 312c-4.167 1.888-6.7 4.734-9.7 8.102q-1.706 1.84-3.42 3.671a268 268 0 0 0-5.282 5.801c-10.12 11.451-10.12 11.451-17.053 12.279-4.255.153-8.33-.286-12.545-.853q-3.281-.256-6.562-.5A678 678 0 0 1 159 340c4.933-6.005 10.352-11.47 15.864-16.939q2.48-2.461 4.954-4.93 5.245-5.225 10.494-10.443 6.113-6.077 12.218-12.162a3588 3588 0 0 1 4.887-4.856l2.975-2.964 2.63-2.614c2.02-1.934 2.02-1.934 2.978-4.092 3.179 1.373 4.972 2.848 7.14 5.532 3.374 4.089 6.86 8.054 10.4 12a152 152 0 0 1 4.357 5.197c6.208 7.699 12.562 14.73 22.817 16.038 11.411.955 22.901.224 34.286-.767l-2.12-2.1a11648 11648 0 0 1-19.733-19.597 5267 5267 0 0 0-10.146-10.075 3620 3620 0 0 1-9.784-9.726q-1.865-1.859-3.74-3.708a1107 1107 0 0 1-5.223-5.2l-1.576-1.542c-4.497-4.537-4.497-4.537-4.678-8.052 1.573-2.19 1.573-2.19 4.002-4.61l2.765-2.79 3.09-3.04q1.608-1.61 3.212-3.22a1966 1966 0 0 1 8.778-8.727c3.07-3.042 6.125-6.097 9.182-9.151a7211 7211 0 0 1 15.453-15.376c7.256-7.2 14.494-14.415 21.73-21.634a21977 21977 0 0 1 18.732-18.662q5.21-5.189 10.429-10.367l3.149-3.131c5.13-5.109 10.275-10.139 15.843-14.776 1.745-1.618 3.058-3.317 4.424-5.262C369.271 124.113 384.051 126.6 400 128"
      ></path>
      <path
        fill={color}
        d="M147 209q8.834-.185 17.67-.275 3.005-.037 6.008-.102c2.883-.061 5.764-.09 8.646-.111l2.706-.078c4.27-.002 6.284.024 9.716 2.738L194 214l2.77 2.77L218 238a126 126 0 0 1-13.125 15.563l-1.84 1.939-1.793 1.814-1.598 1.64C198 260 198 260 196.094 259.942c-2.874-1.295-4.617-3.113-6.832-5.353l-2.737-2.752-1.414-1.446a744 744 0 0 0-4.226-4.273c-3.925-3.97-7.798-7.947-11.432-12.185-4.987-5.809-10.566-11.053-16.04-16.395l-2.503-2.469-2.277-2.226C147 211 147 211 147 209"
      ></path>
    </svg>
  )
}

export default NextJs
