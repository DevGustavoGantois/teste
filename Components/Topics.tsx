import { topicsData } from "@/data";
import { Code, Trophy, UserCircle } from "phosphor-react";

export function Topics() {
    return (
        <section className="py-10">
            {topicsData.map((item, index) => {
                return (
                    <div key={index}>
                        <h1 className="text-center font-primary text-gradient-white font-bold text-3xl lg:text-5xl mt-20 lg:mt-40" data-aos="zoom-in">
                            {item.title}
                        </h1>
                    </div>
                );
            })}
            <div className="flex flex-col lg:flex-row justify-center gap-16 mt-12">
                <div className="text-center">
                    <div className="flex justify-center">
                        <UserCircle className="text-2xl lg:text-5xl text-[#FF9E00] mt-12" />
                    </div>
                    <h1 className="text-gradient-white font-primary font-bold text-3xl mt-6" data-aos="flip-down">Iniciante</h1>
                    <p className="text-white text-center max-w-[250px] mx-auto mt-2">
                        Orientação para quem está começando na programação.
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center">
                        <Code className="text-2xl lg:text-5xl text-[#FF9E00] mt-12" />
                    </div>
                    <h1 className="text-gradient-white font-primary font-bold text-3xl mt-6" data-aos="flip-down">Programadores Experientes</h1>
                    <p className="text-white text-center max-w-[250px] mx-auto mt-2">
                        Treine funcionários ou estudantes de forma eficiente.
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center">
                        <Trophy className="text-2xl lg:text-5xl text-[#FF9E00] mt-12" />
                    </div>
                    <h1 className="text-gradient-white font-primary font-bold text-3xl mt-6" data-aos="flip-down">Empresas e Instituições</h1>
                    <p className="text-white text-center max-w-[250px] mx-auto mt-2">
                        Mantenha suas habilidades atualizadas e afiadas.
                    </p>
                </div>
            </div>
        </section>
    );
}
