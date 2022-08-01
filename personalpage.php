<?php

include('layouts/Header.php');



?>





<div class="personal">
    <div class="container-personal">
        <div class="row">
            <div class="col-3">

                <div class="info">

                    <div class="photo">
                        <img src="Images/join/Group 691.png" alt="">
                    </div>


                    <div class="names">
                        <h3>Christina Ashens</h3>
                        <p>customer@example.com</p>
                    </div>

                    <hr>

                </div>


                <div class="sittings">

                    <p><span><img src="Images/sittings/grid_view_black_24dp.png" alt=""></span> لوحة القيادة</p>
                    <p><span><img src="Images/sittings/request_quote_black_24dp.png" alt=""></span> طلباتي</p>
                    <p><span><img src="Images/sittings/Path 1350.png" alt=""></span> قائمة الرغبات </p>
                    <p><span><img src="Images/sittings/Path 1806.png" alt=""></span> المحادثات </p>
                    <p><span><img src="Images/sittings/Path 1804.png" alt=""></span> تذكرة الدعم</p>


                    <button class="btn "> <span> <img src="Images/sittings/person_black_24dp (1).png" alt=""></span> اداراة الملف الشخصي</button>


                </div>




            </div>

            <div class="col">

                <form class="manage-profile">
                    <div class="form-group">
                        <label for="name">الأسم الكامل</label>
                        <input type="text" class="form-control" name="name" id="" placeholder="الاسم الكامل">
                    </div>

                    <div class="form-group">
                        <label for="">البريد الاكلتروني</label>
                        <input type="text" class="form-control" name="name" id="" placeholder="البريد الاكلتروني">
                    </div>

                    <div class="form-group">
                        <label for="phone">رقم الهاتف</label>
                        <input type="phone" class="form-control" placeholder="phone number">
                    </div>




                    <div class="form-group">
                        <label for="">كلمة سر قديمة</label>
                        <input type="password" class="form-control" name="name" id="" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label for="">كلمة سر جديدة </label>
                        <input type="password" class="form-control" name="name" id="" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label for=""> تأكيد كلمة المرور </label>
                        <input type="password" class="form-control" name="name" id="" placeholder="Password">
                    </div>


                    <div class="form-group new-photo ">
                        <label for=""> صورة الملف الشخصي</label>

                        <div class="internal">
                            <input class="image" type="image" name="name" src="Images/join/Group 691.png"><br>


                            <label class="pic-photo">
                                <input type="file" />
                                أختر صورة
                            </label>


                        </div>

                    </div>


                    <button type="submit" class="btn "> تحديث</button>
                </form>



                <div class="add-new">
                    <div class="topnew">
                        <span>عنوانين</span>
                        <button type="submit" class="btn "> اضف جديد</button>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <p>عنوان الشحن الأفتراضي</p>
                            <div class="detailss">
                                <p>Duke Lane3977</p>
                                <p>, Alabaster, Alabama5520</p>
                                <p>United States</p>
                                <p>123456789</p>

                            </div>
                        </div>

                        <div class="col-6">
                            <p>عنوان الفواتير الأفتراضي</p>
                            <div class="detailss">

                                <p>Duke Lane3977</p>
                                <p>, Alabaster, Alabama5520</p>
                                <p>United States</p>
                                <p>123456789</p>

                            </div>
                        </div>



                        <div class="col-6">
                            <p> كل العناوين</p>
                            <div class="detailss">
                                <p>Duke Lane3977</p>
                                <p>, Alabaster, Alabama5520</p>
                                <p>United States</p>
                                <p>123456789</p>

                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    </div>
</div>



















<?php

include('layouts/Footer.php');



?>