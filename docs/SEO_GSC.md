# SEO & Google Search Console

Domain canonical production:

`https://with-soerai.dekatlokal.com/`

## Verifikasi Search Console

1. Buat Domain property `dekatlokal.com` (jika dikelola terpusat) atau URL-prefix property `https://with-soerai.dekatlokal.com/`.
2. Untuk URL-prefix property, tambahkan environment variable berikut di Vercel lalu redeploy:

   `GOOGLE_SITE_VERIFICATION=REPLACE_WITH_GOOGLE_VERIFICATION_TOKEN`

   Isi hanya tokennya, tanpa awalan `google-site-verification=`.
3. Verifikasi bahwa token muncul sebagai meta `google-site-verification` di HTML production.
4. Kirim sitemap `https://with-soerai.dekatlokal.com/sitemap.xml` melalui menu Sitemaps.
5. Jalankan URL Inspection pada homepage, uji live URL, lalu request indexing.

## Pemeriksaan setelah deploy

- `/` mengembalikan HTTP 200.
- `/robots.txt` mengizinkan crawling dan menunjuk ke sitemap production.
- `/sitemap.xml` hanya berisi URL canonical production yang dapat diindeks.
- Canonical, Open Graph URL, gambar sosial, dan JSON-LD memakai HTTPS production.
- Page Indexing, Performance, Core Web Vitals, HTTPS, dan enhancement reports dipantau setelah Google mengumpulkan data.

Website ini bukan katalog atau halaman transaksi produk. Karena itu schema `Product` dan `Offer` tidak ditambahkan. Product snippets, Merchant listings, serta Shopping reports baru relevan jika produk, harga, ketersediaan, dan transaksi benar-benar terlihat di halaman.
