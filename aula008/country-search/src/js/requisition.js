import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://geodb-cities-graphql.p.rapidapi.com/",
        headers: {
            "x-rapidapi-key":
                "2f6dae03d6msh7798f55939da1efp18c49ajsn0cf9662e8f16",
            "x-rapidapi-host": "geodb-cities-graphql.p.rapidapi.com",
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }),
    cache: new InMemoryCache(),
});

export async function fetchCountries({
    after,
    namePrefix,
    before,
    first = 10,
} = {}) {
    const QUERY = gql`
        query Countries(
            $after: String
            $namePrefix: String
            $before: String
            $first: Int
        ) {
            countries(
                after: $after
                before: $before
                namePrefix: $namePrefix
                first: $first
            ) {
                edges {
                    node {
                        callingCode
                        capital
                        code
                        currencyCodes
                        flagImageUri
                        name
                        wikiDataId
                        numRegions
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    startCursor
                }
                totalCount
            }
        }
    `;

    try {
        // monta variáveis sem enviar strings vazias
        const variables = { first };
        if (after && after !== "") variables.after = after;
        if (namePrefix && namePrefix !== "") variables.namePrefix = namePrefix;
        if (before && before !== "") variables.before = before;

        const result = await client.query({
            query: QUERY,
            variables,
            fetchPolicy: "network-only",
        });

        const countries = result?.data?.countries;
        const nodes = countries?.edges?.map((e) => e.node) ?? [];
        return {
            nodes, // array de países (cada item é node)
            pageInfo: countries?.pageInfo ?? null,
            totalCount: countries?.totalCount ?? 0,
            raw: countries, // opcional: o objeto bruto se precisar
        };
    } catch (err) {
        console.error("GraphQL error:", err);
        try {
            const res = err?.response || err?.networkError?.response;
            if (res && typeof res.text === "function") {
                const text = await res.text();
                console.error("Response body:", text);
            } else if (err?.networkError?.result) {
                console.error("Network result:", err.networkError.result);
            }
        } catch (e) {
            console.error("Erro ao ler corpo da resposta:", e);
        }
        throw err;
    }
}
