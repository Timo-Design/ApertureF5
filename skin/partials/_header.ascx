<header class="apf5-header sticky-top">
  <div class="eyebrow-bar">
    <div class="container">
      <div class="d-flex align-items-center justify-content-end gap-3 py-2">
        <dnn:Login runat="server" id="dnnLogin" />
        <dnn:User runat="server" id="dnnUser" />
      </div>
    </div>
  </div>
  <div class="logo-nav-bar">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between gap-3 py-2">
        <dnn:LOGO id="dnnLOGO" runat="server" InjectSvg="true" />
        <div class="d-none d-md-flex"><dnn:MENU id="menu_desktop" MenuStyle="menus/desktop" runat="server" NodeSelector="*,0,2"></dnn:MENU></div>
        <div class="d-flex d-md-none"><dnn:MENU id="menu_mobile" MenuStyle="menus/mobile" runat="server" NodeSelector="*,0,2"></dnn:MENU></div>
      </div>
    </div>
  </div>
</header>
