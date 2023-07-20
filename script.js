<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PuhSoroYo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#" onclick="showPage('home')">Home</a></li>
                <li><a href="#" onclick="showPage('teams')">Teams</a></li>
                <li><a href="#" onclick="showPage('contact')">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" style="display: none;">
            <!-- Bagian Home sebelumnya -->
        </section>

        <section id="teams" style="display: none;">
            <div class="container">
                <h2>Our Team</h2>
                <div class="team-member">
                    <img src="foto_anggota_1.jpg" alt="Anggota Tim 1">
                </div>
                <div class="team-member">
                    <img src="foto_anggota_2.jpg" alt="Anggota Tim 2">
                </div>
                <!-- Tambahkan div team-member dan foto untuk setiap anggota -->
            </div>
        </section>

        <section id="contact" style="display: none;">
            <div class="container">
                <h2>Contact Us</h2>
                <p>Follow us on Instagram: <a href="https://instagram.com/puhsoroyo?igshid=MzNlNGNkZWQ4Mg==">@puhsoroyo</a>&nbsp;&nbsp;&nbsp;Email: <a href="mailto:puhsoroyo@gmail.com">puhsoroyo@gmail.com</a></p>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Your Esport Website. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
    <script>
        function showPage(pageId) {
            // Semua bagian halaman disembunyikan terlebih dahulu
            var sections = document.querySelectorAll('section');
            for (var i = 0; i < sections.length; i++) {
                sections[i].style.display = 'none';
            }

            // Tampilkan bagian halaman yang sesuai dengan tautan yang ditekan
            var selectedSection = document.getElementById(pageId);
            selectedSection.style.display = 'block';
        }
    </script>
</body>
</html>
