import Link from "next/link";

interface Link {
  name: string;
  href: string;
}

interface FooterLinkProps {
  title: string;
  links: Link[];
}

export default function FooterLink({ title, links }: FooterLinkProps) {
  return (
    <div>
      <h3 className="font-playfair-display font-semibold text-xl md:text-2xl mb-4">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="font-playfair-display font-medium md:text-lg "
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
