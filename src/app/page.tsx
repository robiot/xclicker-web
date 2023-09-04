/* eslint-disable react/no-unescaped-entities */
"use client";

/* eslint-disable @next/next/no-img-element */
import { ArrowDownward, GitHub } from "@material-ui/icons";
import Link from "next/link";
import { FeatureItem } from "../components/home/FeatureItem";

export default function Home() {
  return (
    <>
      <div className="bg-custom_gray">
        <div className="flex justify-between text-white container-xl mx-auto px-10">
          <div className="mb-10 mt-16">
            <div className="text-3xl font-semibold mb-4">
              Auto clicker For Linux
            </div>
            <div className="w-full md:w-96">
              <p className="text-lg mb-4">
                XClicker is an open-source, easy to use, feature-rich and
                blazing fast Auto clicker for linux desktops using x11.
              </p>
              <p className="text-lg mb-8">
                It is written in C and uses the gtk framework. The
                user-interface may look different depending on what gtk theme
                you are using.
              </p>
            </div>

            <div className="flex flex-wrap">
              <Link
                href="/downloads"
                className="bg-blue-400 p-3 rounded-md text-white h-full text-lg mr-3 hidden sm:block"
              >
                <ArrowDownward width="0" />
                <span className="ml-2">Download</span>
              </Link>

              <Link
                href="https://github.com/robiot/xclicker"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-md text-gradient-gray h-full text-lg text-gray-600"
              >
                <GitHub className="mb-1" width="0" />
                <span className="ml-2">Source code</span>
              </Link>
            </div>
          </div>
          <div className="mt-10 hidden lg:block">
            <img src="/window.png" className="h-98 mb-14" alt="xclicker" />
          </div>
        </div>
      </div>

      <div className="px-10 flex-wrap md:flex justify-between text-white container-xl mx-auto w-full mt-20 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FeatureItem
            title="Easy to use"
            description="XClicker is has a fairly simple layout that's easy to navigate."
          />

          <FeatureItem
            title="Safe Mode"
            description="Safe Mode to protect from unwanted behavior when starting the auto clicker."
          />

          <FeatureItem
            title="Autoclick with Time Interval"
            description="Customize the time interval between each click to suit your needs."
          />

          <FeatureItem
            title="Choose Mouse Button"
            description="Select your preferred mouse button (Left, Right, Middle) for clicking actions."
          />

          <FeatureItem
            title="Click Type"
            description="Define the click type (Single, Double, Hold) for precise control over your clicks."
          />

          <FeatureItem
            title="Click at Specified Location"
            description="Specify a precise location on your screen for XClicker to perform clicks."
          />

          <FeatureItem
            title="Randomize Click Interval"
            description="Add variability to click intervals with randomization for more natural behavior."
          />

          <FeatureItem
            title="Click While Holding Hotkey"
            description="Execute clicks by holding down a customizable hotkey for greater control."
          />

          <FeatureItem
            title="Custom Start/Stop Hotkey"
            description="Assign your preferred hotkey combination to start and stop XClicker."
          />
        </div>
      </div>

      <div className="md:flex flex-row px-10 justify-between text-white container-xl mx-auto w-full mt-20 gap-16">
        <img
          src="/window-settings.png"
          className="w-[33rem] mb-14"
          alt="xclicker"
        />
        <div className="mt-5">
          <div className="text-3xl font-semibold mb-10">Changing settings</div>
          <p className="text-lg mb-4">
            You can access the settings menu by pressing the Settings button
            located in the bottom right corner. Here, you can disable Safe Mode.
            Additionally, within the settings, you can configure a custom
            keybind for your convenience.
          </p>

          <p className="text-lg mb-4">
            Once you've adjusted your settings, simply exit the settings menu.
            Changes are saved automatically, so there's no need to worry about
            manual saves.
          </p>
        </div>
      </div>

      <div className="gap-16 md:flex justify-between text-white container-xl mx-auto px-10 w-full mt-20 flex-grow">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold mb-10">Video example</div>
          <p className="text-lg">
            Here, you can watch an example video of me demonstrating XClicker in
            action. The video showcases XClicker being used to automate actions
            in Minecraft on Linux. You'll see how XClicker seamlessly performs
            clicks according to your specified settings, making repetitive tasks
            a breeze.
          </p>

          <p className="text-lg mb-4 mt-4">Sadly the audio dissapeared in the editing process, but the footage still works.</p>
        </div>
        <iframe
          frameBorder="0"
          allowFullScreen
          src="https://www.youtube.com/embed/Lu0gTYSPzeQ"
          className="w-full md:w-[152rem] aspect-video"
        ></iframe>
      </div>

      <div className="bg-gray-800 bg-opacity-40 mt-24 text-center p-2">
        copyright © robiot
      </div>
    </>
  );
}
