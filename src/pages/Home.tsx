import { socialLinks } from "../config/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
        <img
          src="/profile.png"
          alt="Prashant Yadav"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          width={160}
          height={160}
        />
      </a>

      <div className="mb-8 font-medium">
       <span className="text-2xl">Engineering</span> <span className="text-2sm">& shallow humour:)</span>
      </div>

      <div className="prose prose-neutral dark:prose-invert text-justify">
        <p>
        Hello, I’m Prashant, dedicated science fiction enthusiast and relentless explorer, diving deep into the captivating worlds of technology and algorithms. 
        </p>
        <p>
        Undergrad student at National Institute of Technology Patna, breaking technology & algorithms until it confesses how it works. Backed by a strong academic foundation, I like problems that don’t have obvious answers. 
        </p>
          
        <p>
        I design systems and algorithms to evolve — grounded in fundamentals, guided by evidence, and strengthened through iteration.
        </p>
      </div>
    </section>
  );
}
