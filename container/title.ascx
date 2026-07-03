<%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>
<div class="apf5-title-wrapper">
    <h5><dnn:TITLE runat="server" id="apertureF5Title" /></h5>
    <div id="ContentPane" runat="server"></div>
</div>
