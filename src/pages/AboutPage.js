import React from 'react';
// import Header from '../components/client/Header';
// import Footer from '../components/client/Footer';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <div className="div-content bg-gray-100 pb-8">
                <div className="content bg-white mx-auto pb-3 px-3 pt-4" style={{ maxWidth: '1200px' }}>
                    <div className="content1">
                        <h2 className="text-3xl font-semibold uppercase ">Giới thiệu</h2>
                        <h4 className="text-lg font-semibold mt-3">CÔNG TY TNHH TIN HỌC CÔNG NGHỆ AZ VIỆT NAM - <span className="text-blue-500">LAPTOP</span><span className="text-red-500">AZ</span></h4>
                        <p className="mt-4">LaptopAZ thương hiệu bán laptop, linh kiện laptop chính hãng được thành lập và đi vào hoạt động bán lẻ từ năm 2008.</p>
                        <p className="mt-4">
                            Tự hào là một trong những đơn vị hàng đầu trong lĩnh vực kinh doanh laptop, linh kiện laptop tại Hà Nội, Với 12 năm kinh nghiệm, theo phương châm "Uy tín trên từng sản
                            phẩm" cùng hơn 30.000 Khách Hàng thân thiết, chúng tôi cam kết tất cả các sản phẩm laptop bán ra đều có chất lượng tốt nhất trên thị trường hiện nay. Tất cả laptop tại
                            showroom đều được bảo hành chuẩn chỉ theo quy chế của các hãng.
                        </p>
                        <p className="mt-4">
                            Với sự đa dạng về các hãng laptop được người tiêu dùng lựa chọn nhiều nhất, đa dạng nhiều mẫu mã sản phẩm. Laptop Dell, HP, Lenovo, Thinjkpad, Asus, MSI, Acer, Macbook...
                            Laptop Gaming, Laptop đồ họa, Laptop doanh nhân cao cấp mỏng nhe, laptop văn phòng giá rẻ, linh kiện laptop chính hãng...
                        </p>
                        <p className="mt-4">
                            Với kinh nghiệm nhiều năm trong nghề cùng với đội ngũ kỹ sư chuyên ghiệp tận tâm LaptopAZ luôn luôn nỗ lực để đem tới khách hàng những sản phẩm có chất lượng tốt nhất, chế
                            độ bảo hành và hỗ trợ tốt nhất, mức giá thành cạnh tranh phù hợp nhất, xứng đáng với từng số tiền mà khách hàng bỏ ra.
                        </p>
                        <p className="mt-4">
                            Nếu bạn còn đang gặp khó khăn trong việc lựa chọn cho mình 1 chiếc laptop phù hợp với nhu cầu sử dụng thì hãy tới ngay số 18, ngõ 121, Thái Hà, Đống Đa, showroom LaptopAZ
                            để trải nghiệm sản phẩm và lực chọn cho mình những sản phẩm phù hợp nhất đáp ứng tốt nhu cầu sử dụng và xứng đáng với số tiền mình bỏ ra 💯
                        </p>
                        <h5 className="font-bold mt-3">Các dịch vụ hiện tại LaptopAZ cung cấp:</h5>
                        <p className="mt-2">- Bán buôn, bán lẻ các sản phẩm laptop cũ, laptop mới (nhập khẩu, chính hãng)</p>
                        <p>- Bán buôn, bản lẻ linh kiện, phụ kiện laptop chính hãng bảo hành 12 đến 36 tháng như RAM, Ổ cứng, màn hình, Pin, sạc, bàn phím...</p>
                        <h5 className="font-bold mt-3">Cam kết của LaptopAZ với khách hàng:</h5>
                        <p className="mt-2">- Đặt khách hàng làm trung tâm của mọi suy nghĩ và hành động</p>
                        <p>- Bảo đảm các sản phẩm nguyên bản 100%, chất lượng hoàn hảo nhất, cam kết không bán máy đã qua sửa chữa.</p>
                        <p>
                            - Chỉ mang đến cho quý khách hàng những sản phẩm chính hãng theo đúng tiêu chuẩn của nhà sản xuất, không bán hàng kém chất lượng, không bán hàng giả/ hàng nhái, không bán
                            hàng không rõ nguồn gốc xuất xứ.
                        </p>
                        <p>- Giá bán sản phẩm đúng với chất lượng, giá cả cạnh tranh</p>
                        <p>- Cam kết mang đến những chính sách, những chính sách dịch vụ tốt nhất.</p>
                        <p className="mt-3">LaptopAZ.vn hân hạnh được phục vụ bạn trên con đường khám phá các sản phẩm công nghệ!</p>
                        <p className="font-semibold">=============</p>
                        <h4 className="text-lg font-semibold mt-3">CÔNG TY TNHH TIN HỌC CÔNG NGHỆ AZ VIỆT NAM - <span className="text-blue-500">LAPTOP</span><span className="text-red-500">AZ</span></h4>
                        <p><span className="font-semibold">Số ĐKKD:</span> 01008956087 - Sở KH&amp;ĐT Hà Nội cấp ngày 23/10/2019</p>
                        <p> 🏪 Địa chỉ: Số 18, ngõ 121, Thái Hà, Đống Đa, TP Hà Nội</p>
                        <p>📲 Kinh doanh: 09865.02468 - 08586.02468</p>
                        <p>📲 Kỹ thuật: 08289.02468 - 0989.52.4004</p>
                        <p>🌐 Website: <Link className="hover:text-blue-500" to="/">https://laptopaz.vn/</Link></p>
                        <p> <span className="text-lg" style={{ marginLeft: '2px' }}><i className="fab fa-facebook-square" /></span> <Link className="hover:text-blue-500" to="/">Facebook.com/LaptopAZ.vn</Link></p>
                        <p> <span style={{ marginLeft: '2px' }}><i className="fas fa-envelope" /></span><span> Email: </span><Link to="/" className="text-blue-700 hover:text-blue-500"> hotrolaptopaz@gmail.com</Link></p>
                        <p>🔴 Thời gian làm việc: 8h30h - 21h30 tất cả các ngày trong tuần</p>
                        <h2 className="font-bold ml-3 mt-5">HÌNH ẢNH KHÁCH HÀNG VÀ CÁC HOẠT ĐỘNG CỦA CHÚNG TÔI</h2>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <img src="https://laptopaz.vn/media/about/2912_1d238043c6ee21b078ff.jpg" alt="" />
                            <img src="https://laptopaz.vn/media/about/2912_91581b2d5d80badee391.jpg" alt="" />
                            <img src="https://laptopaz.vn/media/about/2912_31b86fae51d4b68aefc5.jpg" alt="" />
                            <img src="https://laptopaz.vn/media/about/2912_75247427_2634429743344519_6336878715129036800_o.jpg" alt="" />
                        </div>
                    </div>
                    <div className="content2" />
                    <div className="content3" />
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default AboutPage
