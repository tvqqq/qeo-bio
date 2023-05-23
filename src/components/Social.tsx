function Social({ logo, url, name }: any) {
  return (
    <li className="m-3">
      <a
        href={url}
        target="_blank"
        data-tooltip-target={`tooltip-bottom-${name}`}
        data-tooltip-placement="bottom"
        data-tooltip-style="light"
      >
        <img
          src={logo}
          className="h-auto w-8 transition ease-in-out hover:scale-110 duration-300 social-logo"
          alt={name}
        />
      </a>
      <div
        id={`tooltip-bottom-${name}`}
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-xs text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip"
      >
        {name}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </li>
  );
}

export default Social;
