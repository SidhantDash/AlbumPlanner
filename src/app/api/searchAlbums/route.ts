import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import qs from "qs";

const client_id: string = process.env.SPOTIFY_CLIENT_ID!;
const client_secret: string = process.env.SPOTIFY_CLIENT_SECRET!;

// from Spotify Client Credentials Flow page
const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

export const spAuthRequest = async (): Promise<string | null> => {
    try {
        const response = await axios.post(authOptions.url,
            qs.stringify(authOptions.form), {
            headers: authOptions.headers
        });

        console.log(response.data)
        const token = response.data.access_token;
        return token;
    } catch (err) {
        console.log(err);
        return null
    }
}

export async function getAlbums(searchParam : string) {

    const accessToken = await spAuthRequest();

    const response = await axios('https://api.spotify.com/v1/search', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: {
            q: searchParam,
            type: "album"
        }
    });

    return response.data;
}

export async function GET(request: NextRequest) {

    const accessToken = await spAuthRequest();
    if (!accessToken) {
        return NextResponse.json(
            {
                error: "Failed to get token"
            },
            {
                status: 500
            }
        );
    }

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    if (!query) {
        return NextResponse.json(
            {
                error: "No query provided"
            },
            {
                status: 400
            }
        ); 
    }

    const response = await axios('https://api.spotify.com/v1/search', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: {
            q: query,
            type: "album"
        }
    });

    return new Response(
        JSON.stringify(response.data), {
            headers: { "Content-Type": "application/json" }
        }
    );
}