<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=mw5VIEIvuMI&list=RD7HDeem-JaSY&index=2&ab_channel=DisneyMusicVEVO',
                'thumbnail' => 'https://m.media-amazon.com/images/I/512G9J05RJL._AC_.jpg',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'Pacific Rim',
                'slug' => 'pacific-rim',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=k2qgadSvNyU&list=RD7HDeem-JaSY&index=5&ab_channel=DuaLipa',
                'thumbnail' => 'https://m.media-amazon.com/images/I/91UXzpHr47L.jpg',
                'rating' => 9.5,
                'is_featured' => 0,
            ],
            [
                'name' => 'Avengers Endgame',
                'slug' => 'avengers-endgame',
                'category' => 'Action, Comedy',
                'video_url' => 'https://www.youtube.com/watch?v=fwK7ggA3-bU&list=RD7HDeem-JaSY&index=6&ab_channel=Maroon5VEVO',
                'thumbnail' => 'https://i.pinimg.com/564x/66/bd/9b/66bd9b1f8354a9aa6900dee35bc2a911.jpg',
                'rating' => 9.5,
                'is_featured' => 0,
            ],
        ];
        Movie::insert($movies);
    }
}
