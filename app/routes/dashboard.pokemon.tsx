import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Typography } from "antd";
import axios from "axios";
import { motion, Variants } from "framer-motion";
import Heading from "~/components/shared/heading";

type TPokemonList = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
};

export let loader: LoaderFunction = async ({ request }) => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    const pokemonList = (await axios.get<TPokemonList>(url)).data;
    return json(pokemonList);
};

export default function DashboardPokemon() {
    const pokemonList = useLoaderData() as TPokemonList;

    const container: Variants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    };

    const item: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <div className="flex flex-col gap-2">
            <Heading title="Pokemon" />
            <motion.ul variants={container} initial="hidden" animate="visible">
                {pokemonList?.results.map(({ name, url }, index) => (
                    <motion.li key={index} variants={item} className="w-fit">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <Typography.Text code className="w-[25px] whitespace-nowrap">
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </Typography.Text>
                            <Typography.Text className="w-[100px] capitalize group-hover:font-semibold transition-all">
                                {name}
                            </Typography.Text>
                            <Typography.Text
                                code
                                className="group-hover:text-blue-500 group-hover:underline transition-all"
                            >
                                {url}
                            </Typography.Text>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}
