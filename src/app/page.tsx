import Image from "next/image";
import ProductInfiniteScroll from "@/components/ProductInfiniteScroll";
import ProductSelect from "@/components/ProductSelect";
import Navbar from "@/ui/Navbar";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className={"px-4 mx-auto max-w-[1440px]"}>
        <section className="flex flex-col items-center mx-auto mt-12 md:flex-row md:w-full md:justify-center">
          <div
            className={
              "relative h-[369px] w-full md:max-w-[673px] md:h-[867px] md:w-1/2"
            }
          >
            <Image
              src={"/assets/images/A2.png"}
              alt={"preparat"}
              fill={true}
              loading="lazy"
              style={{ objectFit: "contain" }}
              className={""}
            />
          </div>
          <div className="flex flex-col justify-end gap-4 mt-4 md:mt-0 md:w-1/2">
            <h1
              className={
                "hidden md:flex uppercase text-3xl xl:text-7xl 2xl:text-[120px] font-bold md:mb-4"
              }
            >
              ARTRO<span className={"text-[#A52C3B]"}>HARD</span>
            </h1>
            <h2 className="2xl:leading-[61px] md:mb-4 md:max-w-[654px] md:text-start xl:text-2xl 2xl:text-5xl w-full text-xl font-normal bg-gradient-to-r from-[#111111] to-[#B1B1B1] text-transparent bg-clip-text text-center">
              Lab-V Arthrohard Preparat
              <br /> na wsparcie stawow dla psa i kota
            </h2>
            <p className="md:leading-6 md:max-w-[654px] lg:text-xl md:text-start text-sm text-center">
              Arthrohard to dobrze przyswajalny suplement diety{" "}
              <br className={"sm:hidden"} />w formie syropu, stworzony z mysla o
              zdrowiu <br className={"sm:hidden"} />
              stawow Twojego psa lub kota.
            </p>
            <button className="hidden md:flex justify-center w-[171px] bg-[#30AB4C] text-white py-2 px-4 mt-4">
              Kup teraz
            </button>
          </div>
        </section>

        <section className="flex flex-col items-center mx-auto mt-12">
          <h2 className="md:text-5xl w-full text-xl font-normal bg-gradient-to-r from-[#111111] to-[#B1B1B1] text-transparent bg-clip-text text-center">
            Co wyroznia nasz preparat?
          </h2>

          <div
            className={"md:w-[126px] border-b border-black w-1/2 h-1 my-4"}
          />

          <div
            className={
              "flex-wrap flex flex-col gap-5 items-center mt-10 md:grid md:grid-cols-2 xl:grid-cols-[370px_370px_370px] md:justify-evenly md:w-full"
            }
          >
            <div className={"flex flex-col items-center w-[370px] md:w-full"}>
              <h2 className="w-full text-xl font-normal text-center mt-10">
                Innowacyjny dodatek - <br className={"sm:hidden"} />
                Czarciego Pazura
              </h2>

              <div
                className={"md:w-[126px] border-b border-black w-1/2 h-1 my-4"}
              />

              <p className="text-sm text-center">
                Zapewnia dodatkowe wsparcie w zwalczaniu stanow bolowych i
                zapalnych. Skoncentrowane skladniki aktywne, opracowane we
                wspolpracy z lekarzami weterynarii, przynosza szybkie i
                zauwazalne efekty, szczegolnie korzystne dla zwierzat z
                powaznymi problemami stawowymi.
              </p>

              <div
                className={
                  "flex flex-col items-center relative w-full min-h-[300px] mt-4"
                }
              >
                <Image
                  src={"/assets/images/shutterstock_1770486131 1.png"}
                  alt={"flower"}
                  fill={true}
                />
              </div>
            </div>

            <div className={"md:hidden border-b border-black w-1/2 h-1 my-4"} />

            <div className={"flex flex-col items-center w-[370px] md:w-full"}>
              <h2 className="w-full text-xl font-normal text-center mt-10">
                Wygoda - <br className={"sm:hidden"} />
                dwa sposoby podawania
              </h2>

              <div
                className={"md:w-[126px] border-b border-black w-1/2 h-1 my-4"}
              />

              <div
                className={"flex items-center space-x-4 md:self-start md:ml-7"}
              >
                <div
                  className={
                    "w-10 h-10 rounded-full flex items-center justify-center"
                  }
                  style={{
                    boxShadow: "0px 1px 9px 0px #00000040",
                  }}
                >
                  1
                </div>
                <p className="text-sm text-center">Bezposrednio do pyszczka</p>
              </div>

              <div
                className={
                  "flex items-center space-x-5 mt-7 md:mt-4 md:self-start md:ml-7"
                }
              >
                <div
                  className={
                    "w-10 h-10 rounded-full flex items-center justify-center"
                  }
                  style={{
                    boxShadow: "0px 1px 9px 0px #00000040",
                  }}
                >
                  2
                </div>
                <p className="text-sm text-center">Zmieszany z karma</p>
              </div>

              <div className={"flex gap-7 min-h-[300px] w-full mt-4"}>
                <div className={"relative w-full"}>
                  <Image
                    src={"/assets/images/PexelsPhotobyThirdman.png"}
                    alt={"dog1"}
                    fill={true}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={"relative w-full"}>
                  <Image
                    src={"/assets/images/PexelsPhotobyMARTPRODUCTION.png"}
                    alt={"dog2"}
                    fill={true}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={"flex flex-col items-center w-[370px] md:w-full"}>
              <h2 className="w-full text-xl font-normal text-center mt-10">
                Skutecznosc - <br className={"sm:hidden"} />
                skoncentrowana dawka
              </h2>

              <div
                className={"md:w-[126px] border-b border-black w-1/2 h-1 my-4"}
              />

              <p className="text-sm text-center">
                Tylko jedna porcja dziennie. To nie tylko wygoda, ale rowniez
                gwarancja, ze Twoje zwierze otrzymuje wszystko, czego
                potrzebuje, aby cieszyc sie zdrowiem i aktywnoscia na dlugo.
                Skorzystaj z zalet Arthrohard i zobacz roznice w komforcie zycia
                swojego zwierzecia.
              </p>

              <div
                className={
                  "flex flex-col items-center relative w-full min-h-[300px] mt-4"
                }
              >
                <Image
                  src={"/assets/images/shutterstock_1770486131 1.png"}
                  alt={"flower"}
                  fill={true}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mx-auto mt-12 md:hidden">
          <h2 className="w-full text-xl font-normal text-center mt-10">
            Dzialanie preparatu
          </h2>
          <div className={"border-b border-black w-1/2 h-1 my-4"} />

          <div className={"flex flex-col gap-5"}>
            <div className={"flex space-x-4"}>
              <div
                className={
                  "w-10 h-10 rounded-full flex items-center justify-center"
                }
                style={{
                  boxShadow: "0px 1px 9px 0px #00000040",
                }}
              >
                1
              </div>
              <p className="text-sm flex items-center">
                Wsparcie rozwoju chrzastki stawowej
              </p>
            </div>

            <div className={"flex space-x-4"}>
              <div
                className={
                  "w-10 h-10 rounded-full flex items-center justify-center"
                }
                style={{
                  boxShadow: "0px 1px 9px 0px #00000040",
                }}
              >
                2
              </div>
              <p className="text-sm flex items-center">
                Dzialanie chondroprotekcyjne
              </p>
            </div>

            <div className={"flex space-x-4"}>
              <div
                className={
                  "w-10 h-10 rounded-full flex items-center justify-center"
                }
                style={{
                  boxShadow: "0px 1px 9px 0px #00000040",
                }}
              >
                3
              </div>
              <p className="text-sm flex items-center">
                Zmniejszenie stanu zapalnego i bolu
              </p>
            </div>

            <div className={"flex space-x-4"}>
              <div
                className={
                  "w-10 h-10 rounded-full flex items-center justify-center"
                }
                style={{
                  boxShadow: "0px 1px 9px 0px #00000040",
                }}
              >
                4
              </div>
              <p className="text-sm flex items-center">Wzmocnienie stawow</p>
            </div>

            <div className={"flex space-x-4"}>
              <div
                className={
                  "w-10 h-10 rounded-full flex items-center justify-center"
                }
                style={{
                  boxShadow: "0px 1px 9px 0px #00000040",
                }}
              >
                5
              </div>
              <p className="text-sm flex items-center">
                Ochrona przed mikrourazami
              </p>
            </div>

            <div className={"flex space-x-4"}>
              <div
                className={
                  "w-10 h-10 rounded-full flex items-center justify-center"
                }
                style={{
                  boxShadow: "0px 1px 9px 0px #00000040",
                }}
              >
                6
              </div>
              <p className="text-sm flex items-center">
                Regeneracja po urazach i zabiegach ortopedycznych
              </p>
            </div>

            <div className={"flex space-x-4"}>
              <div
                className={
                  "w-10 h-10 rounded-full flex items-center justify-center"
                }
                style={{
                  boxShadow: "0px 1px 9px 0px #00000040",
                }}
              >
                7
              </div>
              <p className="text-sm flex items-center">Poprawa jakosci zycia</p>
            </div>
          </div>

          <div className={"border-b border-black w-1/2 h-1 my-4"} />
        </section>

        <section className="flex flex-col items-center mx-auto mt-12 w-full">
          <h2 className="md:text-5xl w-full text-xl font-normal text-center mt-10">
            Sklad w 5 ml
          </h2>

          <div
            className={"md:w-[126px] border-b border-black w-1/2 h-1 my-4"}
          />

          <h2 className="md:text-3xl w-full text-xl font-normal text-center mt-10">
            Co daja poszczegolne skladniki:
          </h2>

          <div
            className={"md:w-[126px] border-b border-black w-1/2 h-1 my-4"}
          />

          <div className="grid grid-rows-3 md:grid-cols-3 grid-cols-1 gap-4 p-4 justify-items-center">
            <div
              className={
                "flex flex-col gap-5 items-center mt-10 md:max-w-[417px] md:w-full group"
              }
            >
              <Image
                src={"/assets/icons/Vector1.svg"}
                alt={"icon"}
                width={24}
                height={32}
              />
              <h2 className="w-full text-xl font-normal text-center">
                Sierczan glukozaminy
              </h2>
              <div
                className={
                  "hidden md:flex md:w-[126px] border-b border-black w-1/2 h-1 md:border-transparent md:group-hover:border-black transition-all ease-in-out duration-300"
                }
              />
              <p className="text-sm flex items-center">650 mg</p>
              <p className="text-sm flex items-center text-center">
                Glukozamina jest naturalnym skladnikiem chrzastki. Dodatek
                glukozaminy przyczynia sie do zwiekszenia produkcji
                glikozaminoglikanow (m.in. siarczanu keratanu, heparanu, kwasu
                hialuronowego), ktore pomagaja w odbudowie chrzastki, co jest
                szczegolnie korzystne dla zwierzat ze zmianami zwyrodnieniowymi
                stawow.
              </p>
            </div>

            <div className="w-[600px] hidden 2xl:flex md:row-span-3 p-4 rounded-lg relative flex-col">
              <Image
                src={"/assets/images/A2.png"}
                alt={"product"}
                fill={true}
                className={"object-contain"}
              />
            </div>

            <div
              className={
                "flex flex-col gap-5 items-center mt-10 md:max-w-[417px] md:w-full group"
              }
            >
              <Image
                src={"/assets/icons/Vector2.svg"}
                alt={"icon"}
                width={34}
                height={28}
              />
              <h2 className="w-full text-xl font-normal text-center">
                Czarci Pazur
              </h2>
              <div
                className={
                  "hidden md:flex md:w-[126px] border-b border-black w-1/2 h-1 md:border-transparent md:group-hover:border-black transition-all ease-in-out duration-300"
                }
              />
              <p className="text-sm flex items-center">250 mg</p>
              <p className="text-sm flex items-center text-center">
                Czarci pazur jest roslina, ktora ma wlasciwosci przeciwzapalne i
                przeciwbolowe. Moze to pomoc zwierzetom, ktore doswiadczaja bolu
                i stanu zapalnego zwiazanego z problemami ze stawami.
              </p>
            </div>

            <div
              className={
                "flex flex-col gap-5 items-center mt-10 md:max-w-[417px] md:w-full group"
              }
            >
              <Image
                src={"/assets/icons/Vector3.svg"}
                alt={"icon"}
                width={24}
                height={32}
              />
              <h2 className="w-full text-xl font-normal text-center">
                Siarczan chondroityny
              </h2>
              <div
                className={
                  "hidden md:flex md:w-[126px] border-b border-black w-1/2 h-1 md:border-transparent md:group-hover:border-black transition-all ease-in-out duration-300"
                }
              />
              <p className="text-sm flex items-center">300 mg</p>
              <p className="text-sm flex items-center text-center">
                Chondroityna, podobnie jak glukozamina, jest skladnikiem
                chrzastki. Chondroityna pomaga zwalczac enzymy, ktore niszcza
                chrzastke, a takze pomaga chrzastce zatrzymac wode, co jest
                wazne dla jej sprezystosci i absorpcji wstrzasow.
              </p>
            </div>

            <div
              className={
                "flex flex-col gap-5 items-center mt-10 md:max-w-[417px] md:w-full group"
              }
            >
              <Image
                src={"/assets/icons/C4.svg"}
                alt={"icon"}
                width={40}
                height={22}
              />
              <h2 className="w-full text-xl font-normal text-center">
                Witamina C
              </h2>
              <div
                className={
                  "hidden md:flex md:w-[126px] border-b border-black w-1/2 h-1 md:border-transparent md:group-hover:border-black transition-all ease-in-out duration-300"
                }
              />
              <p className="text-sm flex items-center">50 mg</p>
              <p className="text-sm flex items-center text-center">
                Witamina C jest poteznym przeciwutleniaczem, ktory moze pomoc w
                ochronie stawow poprzez neutralizacje wolnych rodnikow, ktore
                moga uszkadzac chrzastke. Ponadto, witamina C odgrywa wazna role
                w produkcji kolagenu, kluczowego skladnika chrzastki.
              </p>
            </div>

            <div
              className={
                "flex flex-col gap-5 items-center mt-10 md:max-w-[417px] md:w-full group"
              }
            >
              <Image
                src={"/assets/icons/Vector5.svg"}
                alt={"icon"}
                width={30}
                height={28}
              />
              <h2 className="w-full text-xl font-normal text-center">
                Kwas hialuronowy
              </h2>
              <div
                className={
                  "hidden md:flex md:w-[126px] border-b border-black w-1/2 h-1 md:border-transparent md:group-hover:border-black transition-all ease-in-out duration-300"
                }
              />
              <p className="text-sm flex items-center">50 mg</p>
              <p className="text-sm flex items-center text-center">
                Kwas hialuronowy jest kluczowym skladnikiem plynu stawowego,
                ktory dziala jak smar i amortyzator dla stawow. Suplementacja
                kwasem hialuronowym moze pomoc w utrzymaniu prawidlowej
                objetosci i konsystencji plynu stawowego.
              </p>
            </div>
            <div
              className={
                "flex flex-col gap-5 items-center mt-10 md:max-w-[417px] md:w-full group"
              }
            >
              <Image
                src={"/assets/icons/Vector6.svg"}
                alt={"icon"}
                width={30}
                height={30}
              />
              <div
                className={
                  "hidden md:flex md:w-[126px] border-b border-black w-1/2 h-1 md:border-transparent md:group-hover:border-black transition-all ease-in-out duration-300"
                }
              />
              <h2 className="w-full text-xl font-normal text-center">MSM</h2>
              <p className="text-sm flex items-center">250 mg</p>
              <p className="text-sm flex items-center text-center">
                Metylosulfonylometan, czyli MSM, to naturalny zwiazek siarki,
                ktory pomaga w utrzymaniu zdrowych stawow poprzez zmniejszenie
                stanu zapalnego i bolu. MSM moze rowniez pomagac w produkcji
                kolagenu, co przyczynia sie do zdrowia chrzastki stawowej.
              </p>
            </div>

            <div className={"md:hidden flex flex-col gap-5 items-center mt-10"}>
              <Image
                src={"/assets/icons/Vector7.svg"}
                alt={"icon"}
                width={28}
                height={34}
              />
              <h2 className="w-full text-xl font-normal text-center">
                Syrop glukozowo - fruktozowy
              </h2>
              <p className="text-sm flex items-center">250 mg</p>
            </div>

            <div className="md:hidden flex flex-col gap-5 items-center mt-10">
              <Image
                src={"/assets/images/A2.png"}
                alt={"product"}
                width={674}
                height={867}
              />
            </div>
          </div>

          <Image
            src="/assets/images/piesek1.png"
            alt="piesel"
            width={945}
            height={496}
          />
        </section>
        <Suspense>
          <div className={"flex justify-center mt-10"}>
            <ProductSelect
              label={"Ilosc produktow na stronie:"}
              options={[10, 20, 40, 50]}
            />
          </div>

          <ProductInfiniteScroll />
        </Suspense>
      </main>
    </>
  );
}
