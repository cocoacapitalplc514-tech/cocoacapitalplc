import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

type EditorialBandProps = {
  image: string;
  alt: string;
  label: string;
  statement: string;
  caption?: string;
};

export function EditorialBand({
  image,
  alt,
  label,
  statement,
  caption,
}: EditorialBandProps) {
  return (
    <section className="relative overflow-hidden bg-cocoa">
      <div className="relative min-h-[17rem] w-full py-14 sm:min-h-[20rem] md:min-h-[28rem] md:py-0 lg:min-h-[32rem]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-cocoa/85 via-cocoa/75 to-cocoa/60 md:bg-gradient-to-r md:from-cocoa/95 md:via-cocoa/70 md:to-cocoa/25"
          aria-hidden
        />
        <div
          className="adinkra-motif absolute inset-0 text-white/[0.05]"
          aria-hidden
        />

        <div className="relative flex h-full items-center md:absolute md:inset-0">
          <div className="container-site">
            <Reveal y={24}>
              <div className="max-w-xl">
                <span className="label text-gold">{label}</span>
                <p className="mt-4 font-serif text-[1.625rem] leading-[1.2] text-white sm:text-3xl sm:leading-[1.15] md:mt-5 md:text-4xl lg:text-[2.75rem]">
                  {statement}
                </p>
                {caption && (
                  <p className="copy mt-4 max-w-md text-white/85 md:mt-5">
                    {caption}
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
