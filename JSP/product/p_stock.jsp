<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- 한글깨짐 X-->
        

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>상품관리</title>
        <link rel="stylesheet" type="text/css" href="../vendor/css/jquery.dataTables.min.css">
        <link rel="stylesheet" type="text/css" href="../vendor/css/responsive.dataTables.min.css">
        <link rel="stylesheet" type="text/css" href="../css/datatable.css">
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
        <link href="../css/styles.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous"></script>
    </head>
    <body class="sb-nav-fixed">   
        
        <jsp:include page="../menu.jsp"/>

            <!--메인시작-->
            <div id="layoutSidenav_content">
              <main>
                  <div class="container-fluid px-4">
                      <h1 class="mt-4">상품 재고관리</h1>
                      <ol class="breadcrumb mb-4">
                          <li class="breadcrumb-item"><a href="../index.jsp">Main</a></li>
                          <li class="breadcrumb-item active">상품 재고관리</li>
                      </ol>
                   
                   <!--메인 내용-->
                   <div class="card mb-4">
                    <div class="card-header">
                        <i class="fas fa-table me-1"></i>
                        상품 재고관리
                    </div>
                    <div class="card-body">
                <table id="myTable" class="display" style="width:100%;">
                        <!-- 입고 출고 등록 명령 -->
                        <button class="btns" onclick = "p_in_order(); return false;">입고</button> 
                        <button class="btns" onclick = "p_out_order(); return false;">출고</button>
                        <button class="btns" onclick = "p_input(); return false;">상품등록</button>
                    <thead>
                        <tr>
                            <th>바코드</th>
                            <th>상품코드</th>
                            <th>분류</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>규격</th>
                            <th>가격</th>
                            <th>자재위치</th>
                            
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th colspan="2" style="text-align:right;white-space:nowrap;"></th>
                            <th colspan="6" style="text-align:left;white-space:nowrap;"></th>
                        </tr>
                    </tfoot>
                </table>

                
            </div>
        </div>

        <!--메인 끝-->

                    </div>
                </main>
            </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="../js/scripts.js"></script>
        <script src='../vendor/js/jquery-3.3.1.min.js'></script>
        <script src="../vendor/js/jquery.dataTables.js"></script>
        <script src="../vendor/js/dataTables.responsive.min.js"></script>
        <script src="../vendor/js/dataTables.buttons.min.js"></script>
        <script src="../vendor/js/buttons.html5.min.js"></script>
        <script src="../js/datatable/p_stock.js"></script>
        <script src="../js/in_out_open.js"></script>
        
    </body>
</html>
