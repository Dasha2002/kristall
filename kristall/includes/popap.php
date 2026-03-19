<section class="popap">
    <div class="popap__overlay"></div>

    <div class="popap__content">
        <h2 class="popap-heading">ЗАДАЙТЕ СВОЙ ВОПРОС ЗДЕСЬ</h2>
        <form>
            <div class="form-name">
                <input type="text" id="name" name="name" placeholder="Ваше имя">
            </div>
            <div class="form-phone">
                <input type="tel" id="phone" name="phone" placeholder="+7 (999) 99-99-999 ">
            </div>
            <div class="form-email">
                <input type="email" id="mail" name="email" placeholder="E-mail">
            </div>
            <div class="form-coment">
                <textarea id="coment" name="coment-text" placeholder="Текст"></textarea>
            </div>
            <div class="file-upload-wrapper">
                <label for="file" class="custom-file-label">Добавить файл</label>
                <input type="file" id="file" name="file" class="hidden-file-input">
            </div>
            <div class="contacts-form">
                <h3>Выберите удобный способ связи:</h3>
                <div class="btn-contacts">
                    <input type="radio" id="contact-call" name="contact-method" value="call" checked>
                    <label for="contact-call">Звонок</label>

                    <input type="radio" id="contact-telegram" name="contact-method" value="telegram">
                    <label for="contact-telegram">Телеграмм</label>

                    <input type="radio" id="contact-max" name="contact-method" value="max">
                    <label for="contact-max">Max</label>

                    <input type="radio" id="contact-email" name="contact-method" value="email">
                    <label for="contact-email">Почта</label>
                </div>
            </div>

            <div class="btn-checkbox">
                <input type="checkbox" id="check">
                <label for="check">Я даю согласие на обработку персональных данных в соответствии с политикой конфиденциальности</label>
            </div>

            <button class="btn-basic">Задать вопрос</button>
        </form>
    </div>
</section>