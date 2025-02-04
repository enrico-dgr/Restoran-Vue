<template>
  <div class="container my-5 py-5">
    <div class="header__book-a-table">
      <div class="item">
        <h1 class="text-3 text-white slideInLeft">
          Enjoy Our
          <br />
          Delicious Meal
        </h1>
        <p class="text-white slideInLeft mb-4 pb-2">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
          Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat
          amet
        </p>
        <a href="" class="btn btn-primary py-sm-3 px-sm-5 mr-3 slideInLeft"> Book A Table </a>
      </div>
      <div class="item">
        <img class="img" src="@/assets/img/header-img.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/styles/functions.scss' as f;

.header__book-a-table {
  display: flex;
  flex-direction: column;
  gap: f.pxToRem(48);
  align-items: center;
  margin: 0 -24px;

  > .item {
    text-align: center;
    padding: 0 f.pxToRem(24);
    overflow: hidden;
  }

  .img {
    max-width: 100%;
    height: auto;
    vertical-align: auto;
    animation: full-rotation 50s linear infinite;
  }
}

@media (min-width: 992px) {
  .header__book-a-table {
    flex-direction: row;
    gap: 0;

    > .item {
      text-align: left;
      flex: 0 0 auto;
      width: 50%;
    }
  }
}
</style>
