'use client'
import React, {useMemo, useState} from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Spinner,
    getKeyValue
} from "@nextui-org/react";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
    const [page, setPage] = useState(1);

    const {data, isLoading} = useSWR(`https://swapi.py4e.com/api/people?page=${page}`, fetcher, {
        keepPreviousData: true,
    });

    const rowsPerPage = 10;

    const pages = useMemo(() => {
        return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
    }, [data?.count, rowsPerPage]);

    const loadingState = isLoading || data?.results.length === 0 ? "loading" : "idle";

    return (
        <Table
            aria-label="Example table with client async pagination"
            bottomContent={
                pages > 0 ? (
                    <div className="flex w-full justify-center">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="background"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                        />
                    </div>
                ) : null
            }
        >
            <TableHeader>
                <TableColumn className='text-md' key="name">Name</TableColumn>
                <TableColumn className='text-md' key="height">Height</TableColumn>
                <TableColumn className='text-md' key="mass">Mass</TableColumn>
                <TableColumn className='text-md' key="birth_year">Birth year</TableColumn>
            </TableHeader>
            <TableBody
                items={data?.results ?? []}
                loadingContent={<Spinner/>}
                loadingState={loadingState}
            >
                {(item) => (
                    <TableRow key={item?.name}>
                        {(columnKey) => (
                            columnKey === 'name' ?
                                <TableCell>
                                    <Link href='/'>
                                        {getKeyValue(item, columnKey)}
                                    </Link>
                                </TableCell> :
                                <TableCell className={`${columnKey === 'height' && 'text-sky-500'} ${columnKey === 'mass' && 'text-rose-700'} ${columnKey === 'birth_year' && 'text-emerald-950'}`}>
                                    {getKeyValue(item, columnKey)}
                                </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
