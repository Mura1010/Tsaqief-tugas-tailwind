function App() {
  return (
    <>
      1.Font Family
      <div className="w-full">
        <p className="font-sans">The Quick Brown Fox</p>
        <p className="font-serif">The Quick Brown Fox</p>
        <p className="font-mono">The Quick Brown Fox</p>
      </div>
      <br />
      2.Hover
      <p className="font-sans hover:font-serif">Arahkan Cursor Ke Saya</p>
      <br />
      3.Font Size
      <p className="text-sm">The Quick Brown Fox</p>
      <p className="text-base">The Quick Brown Fox</p>
      <p className="text-lg">The Quick Brown Fox</p>
      <p className="text-xl">The Quick Brown Fox</p>
      <p className="text-zxl">The Quick Brown Fox</p>
      <p className="text-[100px]">The Quick Brown Fox Contoh Custom</p>
      <br />
      4.Italic
      <p className="italic">The Quick Brown Fox</p>
      <p className="non-italic">The Quick Brown Fox</p>
      <br />
      5.Weight
      <p className="font-light">The Quick Brown Fox</p>
      <p className="font-normal">The Quick Brown Fox</p>
      <p className="font-medium">The Quick Brown Fox</p>
      <p className="font-semibold">The Quick Brown Fox</p>
      <p className="font-bold">The Quick Brown Fox</p>
      <br />
      6.Letter Spacing
      <p className="tracking-tighter">The Quick Brown Fox</p>
      <p className="tracking-normal">The Quick Brown Fox</p>
      <p className="tracking-widest">The Quick Brown Fox</p>
      <br />
      7.Line Height
      <p className="leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        adipisci explicabo ullam veritatis ex qui repellat sint iusto eum! Eos
        sunt est rerum aspernatur, voluptatem minima provident porro in quae?
      </p>
      <hr />
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        adipisci explicabo ullam veritatis ex qui repellat sint iusto eum! Eos
        sunt est rerum aspernatur, voluptatem minima provident porro in quae?
      </p>
      <hr />
      <p className="leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        adipisci explicabo ullam veritatis ex qui repellat sint iusto eum! Eos
        sunt est rerum aspernatur, voluptatem minima provident porro in quae?
      </p>
      <br />
      8.Text Align
      <p className="text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        adipisci explicabo ullam veritatis ex qui repellat sint iusto eum! Eos
        sunt est rerum aspernatur, voluptatem minima provident porro in quae?
      </p>
      <hr />
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        adipisci explicabo ullam veritatis ex qui repellat sint iusto eum! Eos
        sunt est rerum aspernatur, voluptatem minima provident porro in quae?
      </p>
      <hr />
      <p className="text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        adipisci explicabo ullam veritatis ex qui repellat sint iusto eum! Eos
        sunt est rerum aspernatur, voluptatem minima provident porro in quae?
      </p>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        adipisci explicabo ullam veritatis ex qui repellat sint iusto eum! Eos
        sunt est rerum aspernatur, voluptatem minima provident porro in quae?
      </p>
      <br />
      9.Text Color
      <p className="text-sky-300">The Quick Brown Fox</p>
      <p className="text-sky-400">The Quick Brown Fox</p>
      <p className="text-sky-500">The Quick Brown Fox</p>
      <p className="text-sky-600">The Quick Brown Fox</p>
      <p className="text-sky-700">The Quick Brown Fox</p>
      <p className="text-sky-800">The Quick Brown Fox</p>
      <p className="text-sky-900">The Quick Brown Fox</p>
      <br />
      10.Text Decoration
      <p className="underline">The Quick Brown Fox</p>
      <p className="overline">The Quick Brown Fox</p>
      <p className="line-through">The Quick Brown Fox</p>
      <p className="no-underline">The Quick Brown Fox</p>
      <p className="underline decoration-solid">The Quick Brown Fox</p>
      <p className="underline decoration-dashed">The Quick Brown Fox</p>
      <p className="underline decoration-dotted">The Quick Brown Fox</p>
      <p className="underline decoration-double">The Quick Brown Fox</p>
      <p className="underline decoration-wavy">The Quick Brown Fox</p>
      <br />
      11.Background
      <div className="bg-indigo-500">Background Color</div>
      <div className="bg-rose-500">Background Color</div>
      <div className="bg-teal-500">Background Color</div>
      <br />
      12.Width
      <div className="w-full bg-indigo-300">w-96</div>
      <div className="w-96 bg-indigo-400">w-96</div>
      <div className="w-80 bg-indigo-500">w-80</div>
      <div className="w-64 bg-indigo-600">w-64</div>
      <div className="w-48 bg-indigo-700">w-48</div>
      <div className="w-40 bg-indigo-800">w-40</div>
      <div className="w-32 bg-indigo-900 text-gray-50">w-32</div>
      <div className="w-24 bg-indigo-950 text-gray-50">w-24</div>
      <div className="w-[500px] bg-indigo-500">w-w-custom</div>
      <br />
      13.Height
      <div className="h-96 w-96 bg-indigo-400">h-96</div>
      <div className="h-80 w-80 bg-indigo-500">h-80</div>
      <div className="h-64 w-64 bg-indigo-600">h-64</div>
      <div className="h-48 w-48 bg-indigo-700">h-48</div>
      <div className="h-40 w-40 bg-indigo-800">h-40</div>
      <div className="h-32 w-32 bg-indigo-900 text-gray-50">h-32</div>
      <div className="h-[100px] w-24 bg-indigo-300">h-custom</div>
      <div className="h-screen w-screen bg-indigo-950">Dynamic Display</div>
      <br />\ 14.Padding
      <div className="pt-6 bg-slate-500">pt-6</div>
      <div className="pr-4 bg-rose-500">pr-4</div>
      <div className="pb-8 bg-indigo-500">pb-8</div>
      <div className="pl-2 bg-teal-500">pl-2</div>
      <div className="py-2 bg-sky-500">py-2</div>
      <div className="px-2 bg-gray-500">px-2</div>
      <div className="p-[50px] bg-purple-500">Padding Custom</div>
      <br />
      15.Margin
      <div className="mt-6 bg-slate-500">mt-6</div>
      <div className="mr-4 bg-rose-500">mr-4</div>
      <div className="mb-8 bg-indigo-500">mb-8</div>
      <div className="ml-2 bg-teal-500">ml-2</div>
      <div className="my-2 bg-sky-500">my-2</div>
      <div className="mx-2 bg-gray-500">mx-2</div>
      <br />
      16.Justify Content & Gap
      <div className="flex justify-start bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <div className="flex justify-center bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <div className="flex justify-end bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <div className="flex justify-between bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      17.Borders
      <div className="rounded w-48 text-center border-2 border-rose-500">
        Rounded
      </div>
      <div className="rounded-md w-48 text-center border-2 border-indigo-500">
        Rounded Md
      </div>
      <div className="rounded-lg w-48 text-center border-2 border-teal-500">
        Rounded Lg
      </div>
      <div className="rounded-full w-48 text-center border-2 border-sky-500">
        Rounded Full
      </div>
      <div className="rounded-[100px] w-48 text-center border-[3px] border-slate-500">
        Rounded Custom
      </div>
      <br />
      18.Flex
      <div className="flex">
        <div className="flex-none w-14 h-14 bg-sky-500">Flex None</div>
        <div className="flex-initial w-64 bg-violet-500">Flex Initial</div>
        <div className="flex-auto w-32 bg-sky-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas,
          minima unde voluptates, commodi est nisi debitis beatae possimus aut
          explicabo itaque quae, enim minus temporibus autem. In, ex excepturi.
        </div>
      </div>
      <br />
      19.Cursor
      <br />
      <button
        type="button"
        className="cursor-pointer bg-rose-500 p-2 rounded-md"
      >
        Submit
      </button>
      <br />
      <br />
      <button
        type="button"
        className="cursor-progress bg-indigo-500 p-2 rounded-md"
      >
        Saving
      </button>
      <br />
      <br />
      <button
        type="button"
        disabled
        className="cursor-not-allowed bg-emerald-500 p-2 rounded-md"
      >
        Confirm
      </button>
      <br />
      <br />
      20.Shadow
      <div className=" bg-cyan-500 shadow-md shadow-cyan-500/50 w-40  rounded-xl text-center py-2">
        Subscribe
      </div>
      <br />
      <div className=" bg-blue-500 shadow-lg shadow-blue-500/50 w-40  rounded-xl text-center py-2">
        like
      </div>
      <br />
      <div className=" bg-indigo-500 shadow-xl shadow-indigo-500/50 w-40  rounded-xl text-center py-2">
        Share
      </div>
      <br />
      21.Display
      <div>
        When Controling The Flow Of Text, Using The CSS Property
        <span className="inline bg-slate-500">
          display: inline - Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Maxime ipsa et expedita facere doloribus culpa? Aliquam eaque
          cum, reprehenderit porro ratione reiciendis sint soluta, iste culpa
          atque necessitatibus. Cupiditate, praesentium.
        </span>
        Will Cause The Text Inside The Element To Wrap Normaly
      </div>
      <br />
      <div>
        When Controling The Flow Of Text, Using The CSS Property
        <span className="inline-block bg-slate-500">
          display: inline block - Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Maxime ipsa et expedita facere doloribus culpa? Aliquam eaque
          cum, reprehenderit porro ratione reiciendis sint soluta, iste culpa
          atque necessitatibus. Cupiditate, praesentium.
        </span>
        Will Cause The Text Inside The Element To Wrap Normaly
      </div>
      <br />
      <div>
        Lastly, Using The Property (" ")
        <span className="block bg-slate-500">
          display: block - Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Maxime ipsa et expedita facere doloribus culpa? Aliquam eaque
          cum, reprehenderit porro ratione reiciendis sint soluta, iste culpa
          atque necessitatibus. Cupiditate, praesentium.
        </span>
        Will Cause The Text Inside The Element To Wrap Normaly
      </div>
    </>
  );
}

export default App;
